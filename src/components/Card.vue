<template>
  <div
    class="flex items-center w-full h-20"
    :class="{ 'bg-green-300': todo.done, 'bg-slate-300': !todo.done }"
  >
    <div class="flex justify-between w-full mx-4 border-2">
      <p
        class="p-1 my-auto bg-yellow-200"
        :class="{ 'line-through': todo.done }"
      >
        {{ todo.content }}
      </p>
      <div class="flex gap-4">
        <button @click="$emit('checkClick', todo.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="p-[.50rem] rounded-sm bg-green-500 w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <button @click="$emit('xClick', todo.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="p-[.50rem] rounded-sm bg-red-500 w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: Object,
});
</script>

<style lang="scss" scoped></style>
