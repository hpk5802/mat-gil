import {
  convertMetersToKilometers,
  convertMilliSecondsToTime,
  convertPriceToWon,
} from '@/app/utils/format';
import IconMarker from '@/app/components/icons/IconMarker';
import IconClock from '@/app/components/icons/IconClock';
import IconCharge from '@/app/components/icons/IconCharge';
import IconHandle from '@/app/components/icons/IconHandle';
import { Summary } from '@/app/types/directions';

function DirectionDescription({
  summary: { distance, duration, taxiFare, tollFare },
}: {
  summary: Summary;
}) {
  return (
    <dl>
      <div className="mb-2 mt-2 grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <dt className="flex items-center gap-0.5 text-md text-gray-300">
            <IconMarker className="h-3 w-3" />
            <span>거리</span>
          </dt>
          <dd className="font-semibold text-white">
            {convertMetersToKilometers(distance)}
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="flex items-center gap-0.5 text-md text-gray-300">
            <IconClock className="h-3 w-3" />
            <span>예상 시간</span>
          </dt>
          <dd className="font-semibold text-white">
            {convertMilliSecondsToTime(duration)}
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="flex items-center gap-0.5 text-md text-gray-300">
            <IconHandle className="h-3 w-3" />
            <span>택시요금</span>
          </dt>
          <dd className="font-semibold text-white">
            {convertPriceToWon(taxiFare)}
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="flex items-center gap-0.5 text-md text-gray-300">
            <IconCharge className="h-3 w-3" />
            <span>통행료</span>
          </dt>
          <dd className="font-semibold text-white">
            {convertPriceToWon(tollFare)}
          </dd>
        </div>
      </div>
    </dl>
  );
}

export default DirectionDescription;
