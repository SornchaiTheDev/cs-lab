import { createTheme } from 'thememirror'
import { tags as t } from '@lezer/highlight'

export const materialDarkCode = createTheme({
    variant: 'dark',
    settings: {
        background: '#33373A',
        foreground: '#89ddff',
        caret: '#7c3aed',
        selection: '#404040',
        lineHighlight: '#404040',
        gutterBackground: '#33373A',
        gutterForeground: '#8a919966',
    },
    styles: [
        {
            tag: t.comment,
            color: '#525252',
        },
        {
            tag: t.variableName,
            color: '#eeeeee',
        },
        {
            tag: [t.string, t.special(t.brace)],
            color: '#a5e844',
        },
        {
            tag: t.number,
            color: '#fd9170',
        },
        {
            tag: t.bool,
            color: '#fa9200',
        },
        {
            tag: t.null,
            color: '#0d7ae7',
        },
        {
            tag: [t.definition(t.propertyName), t.function(t.variableName)],
            color: '#c762ea',
        },
        { tag: t.keyword, color: '#c792ea' },
        {
            tag: t.operator,
            color: '#89ddff',
        },
        {
            tag: t.className,
            color: '#50575e',
        },
        {
            tag: t.definition(t.typeName),
            color: '#00aaff',
        },
        {
            tag: t.typeName,
            color: '#4c9ef0',
        },
        {
            tag: t.angleBracket,
            color: '#dd7f27',
        },
        {
            tag: t.tagName,
            color: '#ffae00',
        },
        {
            tag: t.attributeName,
            color: '#ff6600',
        },
    ],
})
