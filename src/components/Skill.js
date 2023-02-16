import { SCCerceve, SCP, SCImages } from "../css/Skillscss";

function Skill(props) {
  const { data } = props;
  return (
    <SCCerceve>
      <SCImages src={data.img} />
      <SCP>{data.isim}</SCP>
    </SCCerceve>
  );
}
export default Skill;
