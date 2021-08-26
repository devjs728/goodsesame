import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { classNames } from "../../../utils";
import Text1 from "../../widgets/texts/text1";
import Title2 from "../../widgets/texts/title2";
import Title3 from "../../widgets/texts/title3";
const faqs = [
  {
    question:
      "Puis - je remplacer le Produit - A par le produit-B dans cette recette?",
    answer:
      "Vous êtes quoi, comment pouvez-vous remplacer les aliments dans les recettes par ceux qui vous sont plus disponibles ou plus vous aimez! Vous vous détruirez vous-même et votre âme immortelle, ne pensez même plus jamais à changer quelque chose à votre goût! Si l'esprit et la vie vous sont chers-cuisinez strictement selon la recette, sans compter la tête, sinon le ciel se glissera sur le sol!",
  },
  {
    question:
      "Pourquoi avez-vous une recette aussi complexe, parce que vous pouvez beaucoup plus facile?",
    answer: (
      <>
        C'est pas vrai. Je ne cuisine pas de plats complexes, mais je suis
        catégoriquement contre la simplification de la recette au détriment du
        goût. Si cette approche ne vous plaît pas, j'ai une recette qui vous
        conviendra parfaitement,{" "}
        <span className="text-pink-4 ml-2">la voici.</span>
      </>
    ),
  },
  {
    question: "Que puis-je faire et que ne puis-je pas faire sur ce site?",
    answer:
      "La règle la plus importante est que vos commentaires doivent ajouter de la valeur au message, et non le réduire ou le contester.",
  },
  {
    question: "Nous aimerions collaborer avec votre site.",
    answer: (
      <>
        Je serai heureux d'en discuter si vous m'envoyez des détails via le
        formulaire de contact dans la section sur{" "}
        <span className="text-pink-4 ml-2">l'auteur</span>.
      </>
    ),
  },
  {
    question: "Comment puis-je vous contacter?",
    answer: (
      <>
        Vous pouvez nous écrire par mail{" "}
        <span className="text-pink-4 ml-2">contact@goodsesame.com</span>
      </>
    ),
  },
];

const HelpFaq: React.FC = () => {
  return (
    <>
      <Title2>Aide & FAQ</Title2>
      <Text1 className="mt-6">
        Vous trouverez ici les réponses aux questions les plus fréquemment
        posées.
      </Text1>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question}>
            {({ open }) => (
              <div className="border border-gray-200 p-4 rounded-md">
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                    <Title3>{faq.question}</Title3>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? "-rotate-180" : "rotate-0",
                          "h-6 w-6 transform"
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <Text1>{faq.answer}</Text1>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </dl>
    </>
  );
};

export default HelpFaq;
