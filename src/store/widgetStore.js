// src/store/widgetStore.js
import { useState } from 'react';
import widgetsData from '../data/widgets.json';

export const useWidgetStore = () => {
  const [categories, setCategories] = useState(widgetsData.categories);

  const addWidget = (categoryName, widget) => {
    setCategories(categories.map(category =>
      category.name === categoryName
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    ));
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(categories.map(category =>
      category.name === categoryName
        ? { ...category, widgets: category.widgets.filter(w => w.id !== widgetId) }
        : category
    ));
  };

  return { categories, addWidget, removeWidget };
};
