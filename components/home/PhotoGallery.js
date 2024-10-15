// components/Gallery.js
import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.gallery_1} id="photo-gallery">
      <div
        className={`${styles["responsive-container-block"]} ${styles.bigContainer}`}
      >
        <div
          className={`${styles["responsive-container-block"]} ${styles.Container}`}
        >
          <p className={`${styles["text-blk"]} ${styles.heading}`}>
            Photos Gallery
          </p>

          <div
            className={`${styles["responsive-container-block"]} ${styles.imgContainer}`}
          >
            <div className={`${styles.project} ${styles.project1}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb2.png"
                alt="Image 1"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb2.png"
                      alt="Large Image 1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.project} ${styles.project2}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb7.png"
                alt="Image 2"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb7.png"
                      alt="Large Image 2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.project} ${styles.project3}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb3.png"
                alt="Image 3"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb3.png"
                      alt="Large Image 3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.project} ${styles.project4}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb6.png"
                alt="Image 4"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb6.png"
                      alt="Large Image 4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.project} ${styles.project5}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb4.png"
                alt="Image 5"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb4.png"
                      alt="Large Image 5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.project} ${styles.project6}`}>
              <img
                className={styles.smallImage}
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb5.png"
                alt="Image 6"
              />
              <div className={styles.overlay}>
                <div className={styles["overlay-inner"]}>
                  <div className={styles.hdImgs}>
                    <img
                      className={styles.squareImg}
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb5.png"
                      alt="Large Image 6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
