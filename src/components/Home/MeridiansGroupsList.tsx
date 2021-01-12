import React from 'react'
import data from '../../shared/data/primaryMeridiansData'
import { FlatList } from '../atoms/lists'
import { MeridianListItem } from '../molecules'

function MeridianGroupsListComponent() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item: any) => item.meridianID}
      renderItem={({ item }: any) => (
        <MeridianListItem english={item.english} iconPath={item.iconPath} />
      )}
    />
  )
}

export const MeridianGroupsList = MeridianGroupsListComponent
