export default function Home() {
  return <div>Hello!</div>;
}
// import { useDrag } from "react-dnd";
// // import { ItemTypes } from './Constants'

// const style: CSSProperties = {
//   height: "12rem",
//   width: "12rem",
//   marginRight: "1.5rem",
//   marginBottom: "1.5rem",
//   color: "white",
//   padding: "1rem",
//   textAlign: "center",
//   fontSize: "1rem",
//   lineHeight: "normal",
//   float: "left",
// };

// /**
//  * Your Component
//  */
// export default function Card({ isDragging, text }) {
//   const [{ opacity }, dragRef] = useDrag(
//     () => ({
//       type: ItemTypes.CARD,
//       item: { text },
//       collect: (monitor) => ({
//         opacity: monitor.isDragging() ? 0.5 : 1,
//       }),
//     }),
//     []
//   );

//   // backgroundcolor = "#FFFFFF";

//   return (
//     <div
//       ref={dragRef}
//       style={{ opacity }}
//       style={{ ...style, backgroundColor }}
//     >
//       {text}
//     </div>
//   );
// }
