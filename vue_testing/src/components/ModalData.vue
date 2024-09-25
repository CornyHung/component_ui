<template>
    <form @submit.prevent="onSubmit">
      <div>
        <!-- Series Name Input -->
        <input type="text" v-model="values.email" />
        <div v-if="errors.email">{{ errors.email }}</div>
        <span v-else class="c-caption">{{ countEmail }}/100文字</span>
  
        <!-- Banner Name Input -->
        <input type="text" v-model="values.demo" />
        <div v-if="errors.demo">{{ errors.demo }}</div>
        <span v-else class="c-caption">{{ countDemo }}/100文字</span>
      </div>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { computed } from 'vue';
  
  // Define form validation schema
  const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    demo: yup.string().max(10, 'Max length is 10').required('Demo field is required')
  });
  
  // Use useForm for handling the form and validation
  const { handleSubmit, values, errors } = useForm({
    validationSchema: schema,
    initialValues: {
      email: '',
      demo: ''
    }
  });
  
  // Submit handler function
  const onSubmit = handleSubmit((values) => {
    console.log('Form submitted:', values);
  });
  
  // Computed properties for character count
  const countEmail = computed(() => values.email.length || 0);
  const countDemo = computed(() => values.demo.length || 0);
  </script>
  