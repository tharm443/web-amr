export namespace AMR {
    function decode(amr: any): Float32Array<ArrayBuffer> | null;
    function _decode(amr: any): Int16Array<ArrayBuffer> | null;
    function Decoder_Interface_init(): number;
    function Decoder_Interface_exit(state: any): void;
    function Decoder_Interface_Decode(state: any, inBuffer: any, outBuffer: any, bfi: any): void;
    namespace Mode {
        let MR475: number;
        let MR515: number;
        let MR59: number;
        let MR67: number;
        let MR74: number;
        let MR795: number;
        let MR102: number;
        let MR122: number;
        let MRDTX: number;
    }
    let SIZES: number[];
    let AMR_BUFFER_COUNT: number;
    let PCM_BUFFER_COUNT: number;
    let AMR_HEADER: string;
    let WAV_HEADER_SIZE: number;
}
