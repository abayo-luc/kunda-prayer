export const formatPostData = (data) =>
  data.reduce(
    (prev, current) => ({
      ...prev,
      [current.id]: {
        ...current,
        description: current.content?.split('<br>')[0]
      }
    }),
    {}
  )

export const mapArrayToObject = (data) =>
  data.reduce(
    (prev, current) => ({
      ...prev,
      [current.id]: {
        ...current
      }
    }),
    {}
  )
