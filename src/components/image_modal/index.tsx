import styles from "./style.module.scss";
import {
  type QwikIntrinsicElements,
  component$,
  $,
  QwikMouseEvent,
} from "@builder.io/qwik";

export type ImageModalProps = QwikIntrinsicElements["img"] & {
  show: boolean;
  onClose: () => void;
};

export const ImageModal = component$(
  ({ show, onClose, src, alt, width, height }: ImageModalProps) => {
    const _onClose = $((e: QwikMouseEvent<HTMLDivElement, MouseEvent>) => {
      const element = e.target as HTMLElement;
      if (element.matches(`.${styles.image_modal} img`)) return;

      onClose();
    });

    if (!show) return null;
    return (
      <div class={styles.image_modal} onClick$={_onClose}>
        <button class={styles.close}>&times;</button>

        <img src={src} alt={alt} width={width} height={height} />
      </div>
    );
  }
);
