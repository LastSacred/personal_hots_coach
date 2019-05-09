import React from 'react'
import { Segment } from 'semantic-ui-react'

import SettingToggle from './SettingToggle'

const TrackedMatchesSettings = (props) => {
  const settings = [
    {
      label: 'Quick Matches',
      name: 'track_quick_match'
    },
    {
      label: 'Unranked Drafts',
      name: 'track_unranked_draft'
    },
    {
      label: "Ranked Drafts",
      name: 'track_ranked_draft'
    }
  ]

  const showSettings = () => {
    return settings.map(setting => {
      return <SettingToggle key={setting.name} setting={setting} />
    })
  }

  return(
    <Segment color="violet">
      <h2>Tracked Matches</h2>
      {showSettings()}
    </Segment>
  )
}

export default TrackedMatchesSettings
