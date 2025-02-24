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
    <div className="mb-2 mt-2 grid grid-cols-2 gap-2">
      <div className="flex flex-col">
        <span className="flex items-center gap-0.5 text-md text-gray-300">
          <IconMarker className="h-3 w-3" />
          거리
        </span>
        <span className="font-semibold text-white">
          {convertMetersToKilometers(distance)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="flex items-center gap-0.5 text-md text-gray-300">
          <IconClock className="h-3 w-3" />
          예상 시간
        </span>
        <span className="font-semibold text-white">
          {convertMilliSecondsToTime(duration)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="flex items-center gap-0.5 text-md text-gray-300">
          <IconHandle className="h-3 w-3" />
          택시요금
        </span>
        <span className="font-semibold text-white">
          {convertPriceToWon(taxiFare)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="flex items-center gap-0.5 text-md text-gray-300">
          <IconCharge className="h-3 w-3" />
          통행료
        </span>
        <span className="font-semibold text-white">
          {convertPriceToWon(tollFare)}
        </span>
      </div>
    </div>
  );
}

export default DirectionDescription;
