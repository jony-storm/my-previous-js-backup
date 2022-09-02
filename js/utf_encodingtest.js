//0x09cd.toString(2)


/*0b111000001000000010000000.toString(16) // 3 byte size
"e08080"
*/
/*0b1100000010000000.toString(16) // 2 byte size
"c080"*/
110101100 = 1ac
1100000010000000 = c080
1100011010101100 = c6ac
1100000010101100
     11000000000
     110  101100
11000110 10100110
           101100

ucode = 0x1ac
utf_val = 0xc080
(utf_val ^ 0b000101100).toString(2)
((utf_val ^ 0b000101100) ^ (0b11000000000)).toString(16)



function utf_conv(ucode) {
	var utf_val = 0xc080
	console.log(utf_val)
	var f_byte = ucode & ((1 << 6) - 1)
	var s_byte =  (ucode & ~((1 << 6) - 1)) << 2
	utf_val = (utf_val ^ s_byte) ^ f_byte
	return utf_val;
}

100001

def utf_conv(ucode):
  utf_val = 0xc080
  f_byte = ucode & ((1 << 7) - 1)
  s_byte = (ucode & ~((1 << 7) - 1)) << 2
  utf_val = (utf_val ^ s_byte) ^ f_byte
  return utf_val