<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  width: {
    type: String,
    default: '20rem'
  },
  height: {
    type: String,
    default: '2rem'
  },
  placeholder: {
    type: String,
    default: 'username'
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  fontSize: {
    type: String,
    default: '0.8rem'
  },
  lineHeight: {
    type: String,
    default: '1.6rem'
  },
  textDirection: {
    type: String,
    default: 'ltr'
  },
  color: {
    type: String,
    default: '#495057'
  },
  outline: {
    type: Boolean,
    default: true,
  },
  outlineColor: {
    type: String,
    default: '#339af0'
  },
  border: {
    type: String,
    default: ''
  },
  borderSize: {
    type: String,
    default: ''
  },
  borderStyle: {
    type: String,
    default: 'solid'
  },
  borderColor: {
    type: String,
    default: '#dee2e6'
  },
  borderRadius: {
    type: String,
    default: '5px'
  },
  enable: {
    type: Boolean,
    default: true
  },
  consoleDebug: {
    type: Boolean,
    default: false
  }
})
const textAlign = ref(
    props.textDirection !== 'center' ?
        (props.textDirection === 'rtl' ? 'right' : 'ltr') : 'center'
)
const outlineColor = ref(
    props.outline === false || props.outlineColor === '' ?
        '1px solid transparent' : '1px solid ' + props.outlineColor
)

const borderSize = ref(
    props.borderSize === '' ? '1px' : props.borderSize
)
const borderStyle = ref(
    props.borderStyle === '' ? 'solid' : props.borderStyle
)
const border = ref(
    props.border === '' ?
        (borderSize.value + ' ' + borderStyle.value + ' ' + props.borderColor) :
        props.border
)

const inputRef = ref(null)

const noticeMounted = (name) => {
  console.log(name + ' is mounted')
}

const checkState = () => {
  const state = inputRef["value"]
  if (state && !props.enable) {
    state.disabled = true
  }
}

const value = ref('')

const saveValue = (v) => {
  value.value = v
}

onMounted(() => {
  if (props.consoleDebug) {
    noticeMounted('text-input')
  }
  checkState()
})
</script>

<template>
  <div class="text-input center--flex">
    <input :placeholder="props.placeholder" ref="inputRef" :value="value" />
<!--    <div>1234</div>-->
  </div>
</template>

<style scoped>
.text-input {
  display: inline-flex;

  width: v-bind(width);
  height: v-bind(height);
  background-color: v-bind(backgroundColor);
  font-size: v-bind(fontSize);
  color: v-bind(color);

  border: v-bind(border);
  border-radius: v-bind(borderRadius);

  padding: 2px 8px;
  gap: 0.5rem;


}

.text-input input {
  background: none;
  border: none;
  flex: 1;

  outline: none;
  font-size: v-bind(fontSize);
  text-align: v-bind(textAlign);
  line-height: v-bind(lineHeight);

  color: v-bind(color);

}

.text-input:focus-within {
  border: v-bind(outlineColor);
}
</style>