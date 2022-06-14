import { useRouter } from "next/router";
import { videoText } from "@consts";
import { ILangTitles } from "@interfaces";

export const Video = () => {
  const { locale } = useRouter();
  return (
    <div className="section-parallax">
      <div
        className="parallax-bg"
        data-stellar-ratio="0.2"
        data-stellar-offset-parent="true"
      ></div>
      <section
        id="videolightbox"
        className="text-center section-padding section-padding-larger section-inverse onepage-section"
      >
        <div className="container">
          <div className="videolightbox__icon videolightbox-popup text-white">
            <a
              href="https://www.youtube.com/watch?v=eRaLHEdyS8AM&amp;feature=youtu.be"
              data-scr="https://www.youtube.com/watch?v=eRaLHEdyS8A&amp;feature=youtu.be"
              className="popup-video"
              target={"blank"}
            >
              <span className="video_icon">
                <i className="fa fa-play"></i>
              </span>
            </a>
          </div>
          <h2 className="videolightbox__heading text-white">
            {videoText[locale as ILangTitles].toUpperCase()}
          </h2>
        </div>
      </section>
    </div>
  );
};
