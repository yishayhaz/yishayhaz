import styles from "./style.module.scss";
import {
  type QwikIntrinsicElements,
  component$,
  useSignal,
} from "@builder.io/qwik";

export type ImageProps = QwikIntrinsicElements["img"];

export const Image = component$(({ src, alt, width, height }: ImageProps) => {
  const isShown = useSignal(false);

  return (
    <>
      {isShown.value && (
        <div class={styles.image_modal}>
          <button
            class={styles.close}
            onClick$={() => {
              isShown.value = false;
            }}
          >
            &times;
          </button>

          <img src={src} alt={alt} width={width} height={height} />
        </div>
      )}
      <div
        onClick$={() => {
          isShown.value = true;
        }}
        class={styles.image}
      >
        <img src={src} alt={alt} width={width} height={height} />
      </div>
    </>
  );
});
