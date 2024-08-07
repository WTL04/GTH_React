import "./SlideShow.css";
import { Fragment } from "react/jsx-runtime";

interface Props {
  images: string[];
}

function SlideShow({ images }: Props) {
  return (
    <Fragment>

    <div className="hero container">
        <div className="title">
            <h1>Đoàn Gioan Tiền Hô</h1>
            <p>Liên Đoàn Nguồn Sống | Source of Life League of Chapters</p>
        </div>
    </div>

      <div className="slideshow">
        <div className="slides">
          {/* .map() goes thru image list and maps each one */}
          {images.map((img, index) => (
            <img key={index} src={img} alt={"img}"} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default SlideShow;
