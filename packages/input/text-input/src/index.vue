<script setup>
import {onBeforeMount, onMounted, onUnmounted, ref} from "vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
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
  disable: {
    type: Boolean,
    default: false
  },
  disableBackgroundColor: {
    type: String,
    default: '#f1f3f5'
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  regex: {
    type: String,
    default: ''
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
const backgroundColor = ref(
    props.disable ?
        props.disableBackgroundColor : props.backgroundColor
)

const inputRef = ref(null)

const checkState = () => {
  const input = inputRef["value"]
  if (input && props.disable) {
    input.disabled = true
  }
}

const checkAutoFocus = () => {
  const input = inputRef["value"]
  if (input && !props.autoFocus) {
  }
}

const handleInput = () => {
  const inputValue = inputRef["value"]?.value;
  if (props.consoleDebug) {
    console.log(compAction('input', inputValue))
  }
  emit('update:modelValue', inputValue);
}

onBeforeMount(() => {
  if (props.consoleDebug) {
    debugNotice('before mount')
  }
})

onMounted(() => {
  if (props.consoleDebug) {
    debugNotice('mounted')
  }
  checkState()
  checkAutoFocus()
})

onUnmounted(() => {
  if (props.consoleDebug) {
    debugNotice('unmounted')
  }
})

const compName = 'text-input'

const compAction = (action, value) => {
  if (!action) action = ''
  else action = ' @' + action
  action = '[' + compName + action + ']'
  if (value) action += ':' + value
  return action
}

const debugNotice = (state) => {
  console.log(compAction() + ' is ' + state)
}
</script>

<template>
  <div class="text-input center--flex">
    <input
        :placeholder="props.placeholder"
        ref="inputRef"
        :value="modelValue"
        @input="handleInput"
        :autofocus="autoFocus ? autoFocus : undefined"
    />
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