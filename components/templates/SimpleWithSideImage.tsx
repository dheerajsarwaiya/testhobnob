import React from "react";

const SimpleWithSideImage = () => {
  return <div>SimpleWithSideImage</div>;
};

export default SimpleWithSideImage;
// import React, {Component, useState} from "react";
// // import tw from "twin.macro";
// // import styled from "styled-components";
// // import {css} from "styled-components/macro"; //eslint-disable-line
// // import {ReactComponent as PlusIcon} from "/images/plus.svg";
// // import {ReactComponent as MinusIcon} from "/Images/minus.svg";

// // const Container = `relative`;
// // const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

// // const TwoColumn = tw.div`flex`;
// // const Column = tw.div``;

// // const Image = styled.div((props) => [
// //   `background-image: url("${props.imageSrc}");`,
// //   props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
// //   props.imageShadow ? tw`shadow` : tw`shadow-none`,
// //   tw`hidden lg:block rounded h-14 bg-center`,
// // ]);

// // const FAQContent = tw.div`lg:ml-12`;
// // const Subheading = tw`mb-4 text-center lg:text-left`;
// // const Heading = tw`lg:text-left`;
// // const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

// // const FAQSContainer = tw.dl`mt-12`;
// // const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
// // const Question = tw.dt`flex justify-between items-center`;
// // const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
// // const QuestionToggleIcon = styled.span`
// //   ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
// //   svg {
// //     ${tw`w-4 h-4`}
// //   }
// // `;
// // const Answer = tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`;
// export default ({
//   subheading = "",
//   heading = "Questions",
//   description = "Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
//   imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
//   imageContain = false,
//   imageShadow = true,
//   faqs = null,
// }) => {
//   /*
//    * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
//    * the faqs prop
//    */
//   const defaultFaqs = [
//     {
//       question: "Is lunch provided free of cost ?",
//       answer:
//         "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.",
//     },
//     {
//       question: "Do you have 2 Bedroom suites ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       question: "Are Wi-Fi costs included in the price ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       question: "Where can I reach you for support ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//   ];

//   if (!faqs || faqs.length === 0) faqs = defaultFaqs;

//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

//   const toggleQuestion = (questionIndex) => {
//     if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
//     else setActiveQuestionIndex(questionIndex);
//   };

//   return (
//     <div className="relative">
//       <div className="max-w-screen-xl mx-auto py-16 lg:py-20">
//         <div className="flex">
//           <div className="hidden lg:block w-5/12 flex-shrink-0">
//             <img src={imageSrc} />
//           </div>
//           <div>
//             <div className="lg:ml-12">
//               {subheading ? <div className="font-md">{subheading}</div> : null}
//               <div className="font-lg">{heading}</div>
//               <div className="max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100">
//                 {description}
//               </div>
//               <div className="mt-12">
//                 {faqs.map((faq, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       toggleQuestion(index);
//                     }}
//                     className="group cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div className="text-lg lg:text-xl font-semibold">
//                         {faq.question}
//                       </div>
//                       <div className="ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300">
//                         {activeQuestionIndex === index ? (
//                           <img src="/images/minus.svg" />
//                         ) : (
//                           <img src="/images/plus.svg" />
//                         )}
//                       </div>
//                     </div>
//                     <div
//                       className="pointer-events-none text-sm sm:text-base leading-relaxed"
//                       // variants={{
//                       //   open: {opacity: 1, height: "auto", marginTop: "16px"},
//                       //   collapsed: {opacity: 0, height: 0, marginTop: "0px"},
//                       // }}
//                       // initial="collapsed"
//                       // animate={
//                       //   activeQuestionIndex === index ? "open" : "collapsed"
//                       // }
//                       // transition={{
//                       //   duration: 0.3,
//                       //   ease: [0.04, 0.62, 0.23, 0.98],
//                       // }}
//                     >
//                       {faq.answer}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
