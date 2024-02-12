interface IVenue {
  id: number,
  name: string,
  address: string,
  town: string,
  postcode_lookup: string,
  rating: number,
  reviewCount: number,
  type: string
}

export interface IEvent {
EventCode : string,
artists: string[],
cancellationDate: string,
cancellationReason: string,
cancellationType: string,
cancelled: string,
countcollapsedresults: number,
date: string,
description: string,
enddate: string,
entryprice: string,
eventname: string,
eventvisibility: string,
genres: { genreid: string, name: string }[],
goingtocount: string,
goingtos: string,
hascollapsedresults: boolean,
headerHex: string,
healthAndSafety: string[],
id: string,
imageurl: string,
imgoing: null,
largeimageurl: string,
link: string,
listingid: string,
minage: string,
openingtimes: {doorsopen: string, doorsclose: string, lastentry: string},
rep: {enabled: boolean},
rescheduledDate: string,
startdate: string,
ticketUrl: string,
tickets: boolean,
uniquelistingidentifier: string,
venue: IVenue,
xlargeimageurl: string,
xlargeimageurlWebP: string
}

export interface IEventReturn {
  elastic: {timing: number},
  error: number,
  pagecount: number,
  requestId: string,
  results: IEvent[],
  totalcount: string,
  index?: string
}
