import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEvent,
} from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch } from "react-redux";
import { editProfile } from "../../../store/user/action";
import PinkButton2 from "../../widgets/buttons/pinkButton2";

export default function Content() {
  const dispatch = useDispatch();
  const [upImg, setUpImg] = useState<string | ArrayBuffer | null>();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentFile, setFile] = useState<File | null>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 20,
    height: 20,
    x: 0,
    y: 0,
    aspect: 1,
  });
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

  const onSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: HTMLImageElement = imgRef.current;
    const canvas: HTMLCanvasElement = previewCanvasRef.current;
    const crop: Crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );
    }
  }, [completedCrop]);

  const handleUpload = (
    canvas: HTMLCanvasElement | null,
    crop: Crop | null
  ) => {
    if (!crop || !canvas) {
      return;
    }

    canvas.toBlob(
      async (blob) => {
        if (blob) {
          var timeStampInMs =
            window.performance &&
            window.performance.now() &&
            window.performance.timing &&
            window.performance.timing.navigationStart
              ? window.performance.now() +
                window.performance.timing.navigationStart
              : Date.now();
          const file: File = new File(
            [blob],
            currentFile?.name ?? timeStampInMs + ".png",
            {
              type: currentFile?.type ?? "image/png",
            }
          );
          const formData: FormData = new FormData();
          formData.append("banner", file);
          await dispatch(editProfile(formData));
        }
      },
      "image/png",
      1
    );
  };

  return (
    <div>
      <div className="hidden">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
      {upImg && typeof upImg === "string" && (
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          circularCrop={true}
        />
      )}
      <div className="hidden">
        <canvas
          ref={previewCanvasRef}
          // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
          }}
        />
      </div>
      <div className="w-full text-center">
        {upImg ? (
          <PinkButton2
            onClick={() =>
              handleUpload(previewCanvasRef.current, completedCrop)
            }
            className="whitespace-nowrap"
          >
            Upload Image
          </PinkButton2>
        ) : (
          <PinkButton2
            onClick={() => {
              inputRef.current?.click();
            }}
            className="whitespace-nowrap"
          >
            Choose File
          </PinkButton2>
        )}
      </div>
    </div>
  );
}
