import { Space, TimePicker } from "antd";
import type { Dayjs } from "dayjs";

type SingleTimeType = Dayjs | null;
type RangeTimeType = [Dayjs | null, Dayjs | null] | null;

interface TimeProps {
  label?: string;
  type?: "single" | "range" | "double";
  value?: SingleTimeType | RangeTimeType;
  onChange?: (
    value: SingleTimeType | RangeTimeType,
    timeString: string | null | [string, string]  // ✅ match Ant Design exactly
  ) => void;
}

const Time = ({ label = "", type = "single", value, onChange }: TimeProps) => {
  return (
    <Space>
      <div className="space-y-2">
        {label && <p className="font-semibold">{label}</p>}
        <div>
          {type === "single" ? (
            <TimePicker
              value={value as SingleTimeType}
              onChange={onChange as (value: SingleTimeType, timeString: string | null) => void}
            />
          ) : (
            <TimePicker.RangePicker
              value={value as RangeTimeType}
              onChange={onChange as (value: RangeTimeType, timeString: [string, string]) => void}
            />
          )}
        </div>
      </div>
    </Space>
  );
};

export default Time;