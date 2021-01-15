import React from 'react'
import data from '../../shared/data/primaryMeridiansData'
import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'

function MeridianDetailsListComponent() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item: any) => item.meridianID}
      renderItem={({ item }: any) => (
        <MeridianListItem
          key={item.id}
          english={item.english}
          iconPath={item.iconPath}
        />
      )}
    />
  )
}

export const MeridianDetailsList = MeridianDetailsListComponent
