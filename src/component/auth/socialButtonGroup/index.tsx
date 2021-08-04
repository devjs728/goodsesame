import React from "react";
import SocialButton from "./socialButton";

export default function SocialButtonGroup() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <SocialButton imgSrc="./assets/image/google_logo.png" color="#4285F4">
        Google
      </SocialButton>
      <SocialButton imgSrc="./assets/image/facebook_logo.png" color="#157DC3">
        Facebook
      </SocialButton>
      <SocialButton imgSrc="./assets/image/apple_logo.png" color="#201E1A">
        Apple
      </SocialButton>
    </div>
  );
}
