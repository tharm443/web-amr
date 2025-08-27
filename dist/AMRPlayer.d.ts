import type { Player } from "./Player";
export declare const AMRPlayer: (file: ArrayBuffer, { onEnd }?: {
    onEnd?: () => void;
}) => Player;
