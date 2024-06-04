import { BG_IMAGE } from "../../assets/images";
import LazyImage from "../Image/image";
import styles from "./hello-world.module.css";

export default function HelloWorld() {
  return (
    <div className={styles.hello_world_container}>
      <div className={styles.hello_world_bg}>
        <LazyImage src={BG_IMAGE} alt="BG-Image" />
      </div>
      <h1>Hello World</h1>
    </div>
  );
}
