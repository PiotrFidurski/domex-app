export interface House {
  _id: string;
  address: string;
  floorsNumber: number;
  description: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

// array of results
export interface ListResults<T> {
  results: T;
}

// single result
export interface Result<T> {
  result: T;
}
