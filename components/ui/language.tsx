import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Language() {
  return (
    <Select>
      <SelectTrigger className="w-32 bg-white">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ko">한국어</SelectItem>
          <SelectItem value="jp">日本語</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
