import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { DescriptionKindType } from '../../../types/Jobtype';
import { calculateChecks } from '../../../utils/setChecks';
import S from './styles';
import { useGetJobById, useUpdateJob } from '../../../hooks/useQuery';

interface DescriptionItemProps {
  text: string;
  isMainJob: boolean;
  kind: DescriptionKindType;
  checked?: boolean;
}

export default function DescriptionItem({
  text,
  isMainJob,
  checked,
  kind,
}: DescriptionItemProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const onChange = useUpdateJob();
  const { data: job } = useGetJobById();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    if (job && !isMainJob) {
      const targetList = [...job[kind]].map((item) => {
        if (item.text === name) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      const modifiedJob = { ...job, [kind]: targetList };

      onChange(calculateChecks(modifiedJob));
    }
    setIsChecked(!isChecked);
  };
  return (
    <S.Wrapper>
      {isMainJob && <RiCheckboxBlankCircleFill />}
      {!isMainJob && (
        <input
          type="checkbox"
          name={text}
          checked={isChecked}
          onChange={handleChange}
        />
      )}
      <span>{text}</span>
    </S.Wrapper>
  );
}
