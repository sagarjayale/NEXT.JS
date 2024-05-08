import React from 'react'

export default function DoscHome({params,}:{params:{slug:string[]}}) {
  if(params.slug?.length === 2){
    return (
      <div>docs path1 {params.slug[0]} path2 {params.slug[1]}</div>
    )
  }else   if(params.slug?.length === 1){
    return (
      <div>docs path1 {params.slug[0]}</div>
    )
  }
  return <h1>docs home page</h1>
}
