import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from '../api/api';

export default function UsersScreen() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading){
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Carregando usuários...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar usuários</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.address.city}</Text>
        </View>
      )}
      contentContainerStyle={{paddingVertical: 8}}
    />
  );
}

const styles = StyleSheet.create({
  center: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     gap: 8
    },

  item: {
     paddingVertical: 12,
     paddingHorizontal: 16,
     borderBottomWidth: 1,
     borderBottomColor: '#ddd'
    },
    
  name: {
     fontWeight: 'bold',
     fontSize: 16,
     marginBottom: 2
    }
});
