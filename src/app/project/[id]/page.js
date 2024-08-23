import { ShowProject } from "@/components/view/showProject/ShowProject";


export default function Project({params}) {
 const {id} = params

console.log()
 return (
    <div>
      <ShowProject id={id} />
      {id}
    </div>
  );
}
