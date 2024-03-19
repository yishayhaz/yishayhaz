import { isVideo } from "~/utils";
import styles from "./style.module.scss";
import {
  type QwikIntrinsicElements,
  component$,
  $,
  type QwikMouseEvent,
  type QRL,
} from "@builder.io/qwik";

export type GalleryModalProps = QwikIntrinsicElements["img"] & {
  show: boolean;
  onClose: QRL<() => void>;
};

export const GalleryModal = component$(
  ({ show, onClose, src, alt, width, height }: GalleryModalProps) => {
    const _onClose = $((e: QwikMouseEvent<HTMLDivElement, MouseEvent>) => {
      const element = e.target as HTMLElement;
      if (element.matches(`.${styles.image_modal} img`)) return;

      onClose();
    });

    if (!show) return null;
    return (
      <div class={styles.image_modal} onClick$={_onClose}>
        <button class={styles.close}>&times;</button>

        {isVideo(src ?? "") ? (
          <video src={src} controls width={width} height={height} />
        ) : (
          <img src={src} alt={alt} width={width} height={height} />
        )}
      </div>
    );
  }
);
