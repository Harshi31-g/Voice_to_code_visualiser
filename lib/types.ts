export type ArrayState = {
  name: string
  values: number[]
  highlightIndex?: number | null
}

export type AlgoStep = {
  line?: number
  description: string
  variables: Record<string, string | number | boolean | number[] | string[]>
  arrays?: ArrayState[]
}

export type AlgoResponse = {
  language: "javascript" | "python"
  code: string
  steps: AlgoStep[]
  explanation: string
}
