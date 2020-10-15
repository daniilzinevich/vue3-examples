import { reactive, computed, watch } from '@vue/runtime-core';

function useReactive() {
  const toggles = reactive({
    toggleA: false,
    toggleB: true
  });

  const bothToggled = computed(() => toggles.toggleA && toggles.toggleB);

  return [
    toggles,
    bothToggled,
  ];
}

const [toggles, both] = useReactive();
debugger;

document.getElementById('toggle1').checked = toggles.toggleA;
document.getElementById('toggle1').addEventListener('change', (event) => { toggles.toggleA = event.target.checked });
document.getElementById('toggle2').checked = toggles.toggleB;
document.getElementById('toggle2').addEventListener('change', (event) => { toggles.toggleB = event.target.checked });
document.getElementById('both').value = both.value;
watch(both, () => document.getElementById('both').value = both.value);
