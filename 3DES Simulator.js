
// DES Tables
//=== === === === === === === === === === === === 

const IP = [58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,
            62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,
            57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,
            61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7];

const FP = [40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,
            38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,
            36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,
            34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25];

const E = [32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,
           16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1];

const P = [16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,
           2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25];

const S_BOXES = [
    [[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],
    [[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],
    [[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],
    [[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],
    [[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],
    [[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],
    [[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],
    [[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]
];

//16 Round keys: K1, K2, K3 (48 bits each)

//from 0123456789ABCDEF
const K1 = ['000010110000001001100111100110110100100110100101','011010011010011001011001001001010110101000100110','010001011101010010001010101101000010100011010010','011100101000100111010010101001011000001001010111','001111001110100000000011000101111010011011000010','001000110010010100011110001111001000010101000101','011011000000010010010101000010101110010011000110','010101111000100000111000011011001110010110000001','110000001100100111101001001001101011100000111001','100100011110001100000111011000110001110101110010','001000010001111110000011000011011000100100111010','011100010011000011100101010001010101110001010100','100100011100010011010000010010011000000011111100','010101000100001110110110100000011101110010001101','101101101001000100000101000010100001011010110101','110010100011110100000011101110000111000000110010'];

//from FEDCBA9876543210
const K2 = ['111101001111110110011000011001001011011001011010','100101100101100110100110110110101001010111011001','101110100010101101110101010010111101011100101101','100011010111011000101101010110100111110110101000','110000110001011111111100111010000101100100111101','110111001101101011100001110000110111101010111010','100100111111101101101010111101010001101100111001','101010000111011111000111100100110001101001111110','001111110011011000010110110110010100011111000110','011011100001110011111000100111001110001010001101','110111101110000001111100111100100111011011000101','100011101100111100011010101110101010001110101011','011011100011101100101111101101100111111100000011','101010111011110001001001011111100010001101110010','010010010110111011111010111101011110100101001010','001101011100001011111100010001111000111111001101'];

//from 89ABCDEF01234567
const K3 = ['000001000100001101110110100100111001010110001101','011001101110011101010000001011010011011000001110','010011101101010100000011001111000111000011100010','011010111000000101011011001001001100100001100111','001011011100000010001011100001101010110011010010','001100110000100110011010101011011000011101010001','001111000010100010010001000110111100011001000010','000101110010110000011100010111001100010100000100','000000000110110111001101000101001001100010111100','010100010110010100100101010000010011110011110001','110000011000110110100001001010111010100000111001','110100011010001010100111001000110101110100010110','101100011001011010000010000011010000000110110110','011100000001001011100110110001010100100011000101','101100001101000001010100010000101000001011011101','110001000111110001010010111100001010010000011010'];

const PLAINTEXT = "Hello 3DES Encryption";


// =========================================================
// HELPER FUNCS

// Rearrange bits using a permutation table (table values are 1-indexed)
function permute(bits, table) {
    return table.map(i => bits[i - 1]);

}

// XOR two bit arrays
function xor(a, b) {
    return a.map((bit, i) => bit ^ b[i]);
}

// Convert a bit array to an integer
function bitsToInt(bits) {
    return parseInt(bits.join(''), 2);
}

// Convert an integer to a bit array of a given length
function intToBits(n, length) {
    return n.toString(2).padStart(length, '0').split('').map(Number);
}

// Convert a string to a flat bit array (8 bits per character)
function stringToBits(str) {
    return str.split('').flatMap(c => intToBits(c.charCodeAt(0), 8));
}

// Convert a bit array to a hex string (BigInt safely handles 64-bit values)
function bitsToHex(bits) {
    return BigInt('0b' + bits.join('')).toString(16).toUpperCase().padStart(bits.length / 4, '0');
}

// Convert a binary string like '001011...' to a bit array
function keyStrToBits(str) {
    return str.split('').map(Number);
}

// Pad bit array with zeros until its length is a multiple of 64
function padTo64(bits) {
    const remainder = bits.length % 64;
    if (remainder !== 0) 
        bits = bits.concat(new Array(64 - remainder).fill(0));
    return bits;

}


// =====================================================
// S-BOX SUBSTITUTION: 48 bits -> 32 bits
// Split into 8 groups of 6 bits, each group goes through its own S-box
// Row = 1st and last bit  Column = middle 4 bits

function sBoxSubstitution(bits48) {
    let result = [];
    for (let i = 0; i < 8; i++) {
        const chunk = bits48.slice(i * 6, (i + 1) * 6);
        const row = bitsToInt([chunk[0], chunk[5]]);
        const col = bitsToInt(chunk.slice(1, 5));
        const val = S_BOXES[i][row][col];
        result = result.concat(intToBits(val, 4));
    }
    return result;
}


// ========================================================
// ONE DES ROUND
// Expand R (32->48), XOR with round key, S-boxes, P-box, XOR with L
// New L = old R

function desRound(L, R, roundKey, roundNum) {
    const R_expanded = permute(R, E);
    const XORed      = xor(R_expanded, roundKey);
    const afterSbox  = sBoxSubstitution(XORed);
    const afterPbox  = permute(afterSbox, P);
    const newR       = xor(L, afterPbox);
    const newL       = R;

    console.log(`Round ${roundNum}:`);
    console.log(`R expanded : ${R_expanded.join('')}`);
    console.log(`XOR w/ key : ${XORed.join('')}`);
    console.log(`After Sbox : ${afterSbox.join('')}`);
    console.log(`After Pbox : ${afterPbox.join('')}`);
    console.log(`New L : ${newL.join('')}`);
    console.log(`New R : ${newR.join('')}`);

    return [newL, newR];
}


// ============================================================
// FULL DES (16 ROUNDS)
// encrypt=true  -> round keys applied 1->16  (encryption)
// encrypt=false -> round keys applied 16->1  (decryption same algorithm in reverse)

function des(block64, roundKeys, encrypt, label) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`DES ${encrypt ? 'Encryption' : 'Decryption'} ${label}`);
    console.log(`Input : ${block64.join('')} (hex: ${bitsToHex(block64)})`);

    //Initial permutation
    let block = permute(block64, IP);
    console.log(`After IP: ${block.join('')}`);

    //Split into left and right halves
    let L = block.slice(0, 32);
    let R = block.slice(32);
    console.log(`L0: ${L.join('')}`);
    console.log(`R0: ${R.join('')}`);

    //16 rounds forward order for encrypt, reverse for decrypt
    const keyOrder = encrypt
        ? [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        : [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];

    for (let i = 0; i < 16; i++) {
        const keyBits = keyStrToBits(roundKeys[keyOrder[i]]);
        [L, R] = desRound(L, R, keyBits, i + 1);
    }

    // Swap halves then apply last permutation
    const swapped = R.concat(L);
    const output  = permute(swapped, FP);

    console.log(`After swap : ${swapped.join('')}`);
    console.log(`After FP   : ${output.join('')}  (hex: ${bitsToHex(output)})`);

    return output;
}


// =============================================
// TRIPLE DES(Encrypt -> Decrypt -> Encrypt)
// Stage 1: Encrypt with K1
// Stage 2: Decrypt with K2
// Stage 3: Encrypt with K3

function tripleDES(block64) {
    console.log(`\n${'#'.repeat(50)}`);
    console.log(`3DES Block  (hex: ${bitsToHex(block64)})`);

    const stage1 = des(block64, K1, true,  '[Stage 1 - Encrypt K1]');
    console.log(`\n>>> After Stage 1 (hex): ${bitsToHex(stage1)}`);

    const stage2 = des(stage1,  K2, false, '[Stage 2 - Decrypt K2]');
    console.log(`\n>>> After Stage 2 (hex): ${bitsToHex(stage2)}`);

    const stage3 = des(stage2,  K3, true,  '[Stage 3 - Encrypt K3]');
    console.log(`\n>>> Final ciphertext block (hex): ${bitsToHex(stage3)}`);

    return stage3;
}


// ===============================================
// ENCRYPT FULL PLAINTEXT
// Convert string to bits, pad to multiple of 64, encrypt each block

function encryptPlaintext(text) {
    console.log('='.repeat(50));
    console.log(`Plaintext : "${text}"`);

    let bits = stringToBits(text);
    bits = padTo64(bits);

    const numBlocks = bits.length / 64;
    console.log(`Blocks : ${numBlocks}  (after padding to ${bits.length} bits)`);

    let ciphertext = [];

    for (let i = 0; i < numBlocks; i++) {
        const block = bits.slice(i * 64, (i + 1) * 64);
        console.log(`\n${'*'.repeat(50)}`);
        console.log(`BLOCK ${i + 1} of ${numBlocks}  (hex: ${bitsToHex(block)})`);

        const encryptedBlock = tripleDES(block);
        ciphertext = ciphertext.concat(encryptedBlock);
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log('FINAL CIPHERTEXT');
    console.log(`Hex: ${bitsToHex(ciphertext)}`);

    return ciphertext;
}



encryptPlaintext(PLAINTEXT);
