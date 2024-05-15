import { PieDataType } from "./PieChartTypes";

const usePieChartState = ({ data }: { data: PieDataType }) => {
  const colors: string[] = data.map((item) => item.color);
  const groupData = (data: PieDataType) => {
    const groupSize = 5;
    return data.reduce((result: PieDataType[], curr, index) => {
      const newIndex = Math.floor(index / groupSize);
      if (!result[newIndex]) {
        result[newIndex] = [];
      }

      result[newIndex].push(curr);

      return result;
    }, []);
  };
  return [{ colors }, { groupData }];
};

export default usePieChartState;
