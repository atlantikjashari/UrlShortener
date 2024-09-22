'use client'

import { useState } from "react";
import ShortenForm from "./shorten-form";
import UrlList from "./url-list";

export default function UrlShortenerContainer() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handeUrlShortened = () => {
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div>
        <ShortenForm handleUrlShortened={handeUrlShortened}/>
        <UrlList key={refreshKey}/>
    </div>
  )
}
