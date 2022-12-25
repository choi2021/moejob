import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useJobs } from '../../../hooks/useJobs';
import { DescriptionNameType } from '../../../src/types/Jobtype';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { calculateChecks } from '../../../src/utils/calculateChecks';
import S from './styles';

interface DescriptionItemProps {
  text: string;
  isMainJob: boolean;
  kind: DescriptionNameType;
  checked?: boolean;
}

export default function DescriptionItem({
  text,
  isMainJob,
  checked,
  kind,
}: DescriptionItemProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const { data: session } = useSession();
  const user = session?.user;
  const { addOrUpdateJob, getJobById } = useJobs(user);
  const { data: job } = getJobById;
  const { pathname } = useRouter();
  const onUser = pathname === '/user/[id]';
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

      addOrUpdateJob.mutate(calculateChecks(modifiedJob));
    }
    setIsChecked(!isChecked);
  };
  return (
    <S.Wrapper>
      {(isMainJob || !onUser) && <RiCheckboxBlankCircleFill />}
      {!isMainJob && onUser && (
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
