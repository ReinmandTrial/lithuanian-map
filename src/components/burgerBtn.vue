<template>
  <button type="button" class="burger-btn">
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="2.25" rx="1.125" fill="#00404E" />
      <rect y="7.5" width="24" height="2.25" rx="1.125" fill="#00404E" />
      <rect y="15" width="24" height="2.25" rx="1.125" fill="#00404E" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'burgerBtn',
}
</script>

<style>
.burger-btn {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
