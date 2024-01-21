export type UseCase<I, O> = {
  execute: (props: I) => Promise<O>;
};

export type ErrorType = "ValidationError" | "Error" | "";

export type History = {
  date: Date;
  latitude: string;
  longitude: string;
};
