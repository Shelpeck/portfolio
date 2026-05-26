import AndroidIcon from "@/assets/icons/AndroidIcon"
import AppleIcon from "@/assets/icons/AppleIcon"
import WebIcon from "@/assets/icons/WebIcon"
import React from "react"

export enum LinkButtonType {
  web = 'web',
  android = 'android',
  ios = 'ios'
}

type Props = {
  variant: LinkButtonType
  href: string
}

const LinkButton = ({ variant, href }: Props) => {
  switch (variant) {
    case LinkButtonType.web:
      return (
        <a href={href} className="flex flex-row gap-2 bg-secondary w-fit px-4 py-2 rounded-2xl" target="_blank">
          <WebIcon />
          <p>
            Visit site
          </p>
        </a>
      )
    case LinkButtonType.android:
      return (
        <a href={href} className="flex flex-row gap-2 bg-secondary w-fit px-4 py-2 rounded-2xl" target="_blank">
          <AndroidIcon />
          <p>
            Google Play
          </p>
        </a>
      )
    case LinkButtonType.ios:
      return (
        <a href={href} className="flex flex-row gap-2 bg-secondary w-fit px-4 py-2 rounded-2xl" target="_blank">
          <AppleIcon />
          <p>
            App store
          </p>
        </a>
      )
  }
}

export default LinkButton