import type {ObjectType} from './extra'

export interface Foo {
  x: number;
  y: number;
  extra:ObjectType
}

export interface Bar {
  a: number;
  b: number;
}

export interface MyObject {
  foo: Partial<Foo>;
  bar: Pick<Bar,'a'>;
}