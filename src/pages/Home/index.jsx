import Forms from "../../components/Forms";
import List from "../../components/List";
import Videos from "../../components/Videos";
import "./styles.css";

export default function Home() {
  return (
    <main>
      <List />
      <Videos />
      <Forms />
    </main>
  );
}
