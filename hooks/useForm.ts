import { useState } from 'react';
import {
  DescriptionNameType,
  DescriptionType,
  Job,
} from '../src/types/Jobtype';
import uuid from 'react-uuid';

export const useForm = (initialValue: Job) => {
  const [job, setJob] = useState<Job>(initialValue);
  const onAdd = (name: DescriptionNameType) => {
    setJob((prev) => {
      const list = prev[name];
      const newItem: DescriptionType = { text: '', checked: false, id: uuid() };
      return { ...prev, [name]: [...list, newItem] };
    });
  };
  const onDelete = (name: DescriptionNameType, id: string) => {
    setJob((prev) => {
      const list = prev[name].filter((item) => item.id !== id);
      return { ...prev, [name]: list };
    });
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdateDescription = (
    name: DescriptionNameType,
    value: string,
    id: string
  ) => {
    setJob((prev) => {
      const updated = prev[name].map((item) => {
        if (item.id === id) {
          return { ...item, text: value };
        }
        return item;
      });
      return { ...prev, [name]: updated };
    });
  };

  return { job, onAdd, onDelete, onChange, onUpdateDescription, setJob };
};
