import { Space, TimePicker } from "antd";

const Time = ({ label = "", type = "single", value, onChange }) => {


  return (
    <Space vertical>
      <div className="space-y-2">
        {label && <p className="font-semibold">{label}</p>}
        <div>
          {type === "single" ? (
            <TimePicker value={value} onChange={onChange} />
          ) : (
            <TimePicker.RangePicker value={value} onChange={onChange} />
          )}
        </div>
      </div>
    </Space>
  );
};
export default Time;
