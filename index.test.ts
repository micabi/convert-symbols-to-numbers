import { changeTag } from "./src/changeTag";

const testlist: string[] = Array(
  "ｷｸｼ+ﾒ4",
  "ﾄﾒｼﾒ3+ﾂﾒ4",
  "ｸｷ+ﾒ5",
  "ｼﾒ5+ｷﾒ5",
  "ｷﾖﾒ4",
  "ﾒ",
  "ｷﾒ5",
  "ﾒ5+ｷﾒ",
  "ﾐﾚﾄ",
  "ﾂﾒ2+ﾂﾒ2+ﾂﾒ2",
);

test( 'ｷｸｼ+ﾒ4は"235+0000 = 2350000"になる', (): void => {
  expect( changeTag( testlist[ 0 ] ) ).toStrictEqual( "2350000" );
} );

test( 'ﾄﾒｼﾒ3+ﾂﾒ4は"905000+80000 = 985000"になる', (): void => {
  expect( changeTag( testlist[ 1 ] ) ).toStrictEqual( "985000" );
} );

test( 'ｸｷ+ﾒ5は"32+00000 = 3200000"になる', (): void => {
  expect( changeTag( testlist[ 2 ] ) ).toStrictEqual( "3200000" );
} );

test( 'ｼﾒ5+ｷﾒ5は"500000+200000 = 700000"になる', (): void => {
  expect( changeTag( testlist[ 3 ] ) ).toStrictEqual( "700000" );
} );

test( 'ｷﾖﾒ4は"21+0000 = 210000"になる', (): void => {
  expect( changeTag( testlist[ 4 ] ) ).toStrictEqual( "210000" );
} );

test( 'ﾒは0になる', (): void => {
  expect( changeTag( testlist[ 5 ] ) ).toStrictEqual( "0" );
} );

test( 'ｷﾒ5は200000になる', (): void => {
  expect( changeTag( testlist[ 6 ] ) ).toStrictEqual( "200000" );
} );

test( 'ﾒ5+ｷﾒは"ﾒで始まることは適切ではありません: 00000"', (): void => {
  expect( (): string => changeTag( testlist[ 7 ] ) ).toThrow( new Error("ﾒで始まることは適切ではありません: 00000") );
} );

test( 'ﾐﾚﾄは"この記号は使用できません: ﾐ"', (): void => {
  expect( (): string => changeTag( testlist[ 8 ] ) ).toThrow( new Error("この記号は使用できません: ﾐ") );
} );

test( 'ﾂﾒ2+ﾂﾒ2+ﾂﾒ2は"800+800+800 = 2400になる"', (): void => {
  expect( changeTag( testlist[ 9 ] ) ).toStrictEqual( "2400" );
} );
