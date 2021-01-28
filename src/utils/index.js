import useSWR from "swr"

const useIndex = () => {
  const { data, mutate: setIndex } = useSWR("index", null, { initialData: 0 })
  return [data, setIndex]
}

export default useIndex
