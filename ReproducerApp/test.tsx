             <TextInput
                ref={scanInputRef}
                style={styles.scanInput}
                value={scanInput}
                autoComplete="off"
                multiline={false}
                onChangeText={text => {
                  if (!scanInputRef.current?.isFocused()) {
                    scanInputRef.current?.focus();
                  }
                  setScanInput(text);
                }}
                onKeyPress={e => {
                  console.log('e', e);
                }}
                placeholder="请扫描追溯码/发票"
                // autoFocus
                showSoftInputOnFocus={true}
                blurOnSubmit={false}
                autoCapitalize="none"
                onSubmitEditing={e => {
                  const currentScannedText = e.nativeEvent.text;
                  console.log('currentScannedText', currentScannedText);
                  setScanInput('');
                  if (scanInputRef.current) {
                    scanInputRef.current.clear();
                  }

                  // e.preventDefault(); // 阻止默认行为（如表单提交）
                  // e.stopPropagation(); // 阻止事件冒泡
                  // handleScanSubmit(e); // 调用你的处理逻辑
                }}
                returnKeyType="done"
              />