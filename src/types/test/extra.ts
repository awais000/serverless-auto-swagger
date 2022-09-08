const anObject={
  x:'x',
  y:'y',
  z:'z'
} as const

export type ObjectType=typeof anObject;