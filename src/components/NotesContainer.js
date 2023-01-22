import StyledContainerFluid from "./elements/ContainerFluid.elements";
import Note from "./Note";
import { DataContext } from "../context/dataContext";
import { useContext } from "react";
import SkeletonNote from "./SkeletonNote";

export default function NotesContainer() {
  const data = useContext(DataContext).data;

  const skeletonArr = Array.from(" ".repeat(30));

  if (!data) {
    return (
      <StyledContainerFluid>
        {skeletonArr.map(() => (
          <SkeletonNote />
        ))}
      </StyledContainerFluid>
    );
  }

  return (
    <StyledContainerFluid>
      {data?.map((noteData) => (
        <Note key={noteData.docId} data={noteData} />
      ))}
    </StyledContainerFluid>
  );
}
